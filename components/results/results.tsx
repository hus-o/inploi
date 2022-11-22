import {
  UseInfiniteHitsProps,
  useInfiniteHits,
} from "react-instantsearch-hooks-web";
import {
  capitaliseFirstLetter,
  parseEmploymentType,
  parseLocationType,
  LocationType,
} from "../../utils/searchResultUtils";
import {
  Hit,
  BaseHit,
  TransformItemsMetadata,
  TransformItems,
} from "instantsearch.js";
import { ResultsCard, ResultsContainer, CardApply } from "./results.style";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { SearchContext } from "../../contexts/search-context";
import CardDetails from "./card-details";
import NotFound from "../not-found/not-found";

/* TODO
  - filter search, either on LHS, in modal or dropdown under searchbox
  - If location = location include country and city, if hybrid include that and word 'Hybrid - ', if remote then remote
*/

export type IHit = {
  title: string;
  description: string;
  employment_type: string;
  pay_currency: string;
  pay: number;
  pay_type: string;
  country: string;
  city: string;
  expires_at: string;
  apply_url: string;
  location_type: string;
};

interface UseInfiniteHitsPropsMod
  extends Omit<UseInfiniteHitsProps, "transformItems"> {
  transformItems?: TransformItems<Hit<IHit>, TransformItemsMetadata>;
}

const transformItems: UseInfiniteHitsPropsMod["transformItems"] = (items) => {
  // Remove any expires listings
  const currentDate = new Date().toISOString();
  const filtered = items.filter((item) => item.expires_at > currentDate);

  return filtered.map((item) => ({
    ...item,
    title: capitaliseFirstLetter(item.title),
    employment_type: parseEmploymentType(item.employment_type),
    pay_type: capitaliseFirstLetter(item.pay_type),
    location_type: parseLocationType(item.location_type as LocationType),
  }));
};

const Results = () => {
  const infiniteHitsApi = useInfiniteHits({ transformItems });
  const { hits, isLastPage, showMore } = infiniteHitsApi;
  const sentinelRef = useRef(null);
  const { searched } = useContext(SearchContext);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 1.2,
        delayChildren: 5,
        staggerChildren: 5,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "linear",
      },
    },
  };

  useEffect(() => {
    if (sentinelRef.current !== null) {
      console.log(sentinelRef.current);
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLastPage) {
            showMore();
          }
        });
      });

      observer.observe(sentinelRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [isLastPage, showMore, hits]);

  if (!hits || hits.length < 1) {
    return <NotFound />;
  }

  return (
    <AnimatePresence>
      {searched && (
        <ResultsContainer
          as={motion.div}
          variants={container}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          {hits.map((hit, i) => {
            const isLastElement = hits.length - 1 === i;
            const itemProps = isLastElement ? { ref: sentinelRef } : {};
            return (
              <ResultsCard
                ref={sentinelRef}
                key={i}
                as={motion.div}
                variants={item}
                initial="hidden"
                animate="show"
                {...itemProps}
              >
                <Image
                  src="/images/logo.png"
                  alt="company logo"
                  width={25}
                  height={25}
                />
                <CardDetails
                  title={hit.title}
                  country={hit.country}
                  city={hit.city}
                  location_type={hit.location_type}
                  employment_type={hit.employment_type}
                  pay_currency={hit.pay_currency}
                  pay={hit.pay}
                  pay_type={hit.pay_type}
                  description={hit.description}
                />
                <CardApply href={`${hit.apply_url}`} target="_blank">
                  <span>Apply</span>
                </CardApply>
              </ResultsCard>
            );
          })}
          {/* {!isLastPage && (
            <button onClick={showMore} className="ais-InfiniteHits-loadMore">
              Load more
            </button>
          )} */}
        </ResultsContainer>
      )}
    </AnimatePresence>
  );
};

export default Results;
