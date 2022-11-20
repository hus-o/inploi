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
import {
  ResultsCard,
  ResultsContainer,
  CardDetailsContainer,
  PayContainer,
  StyledChevronDown,
  CardCompanyName,
  CardCountryCity,
  CardEmploymentType,
  CardLocationDetails,
  CardLocationType,
  CardPay,
  CardPayType,
} from "./results.style";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

/* TODO
  - filter search, either on LHS, in modal or dropdown under searchbox
  - If location = location include country and city, if hybrid include that and word 'Hybrid - ', if remote then remote
*/

type IHit = {
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

  const container: Variants = {
    hidden: { display: "none" },
    show: {
      display: "flex",
      transition: {
        delay: 5,
        // when: "beforeChildren",
        // staggerChildren: 2,
      },
    },
  };

  //   const item: Variants = {
  //     hidden: { visibility: "hidden" },
  //     show: {
  //       visibility: "visible",
  //       transition: {
  //         duration: 5,
  //         ease: "easeIn",
  //       },
  //     },
  //   };

  if (!hits || hits.length < 1) {
    return null;
  }
  console.log(hits);
  return (
    <ResultsContainer
      as={motion.div}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {hits.map((hit) => {
        return (
          <ResultsCard key={hit.objectID}>
            <Image
              src="/images/logo.png"
              alt="company logo"
              width={25}
              height={25}
            />
            <CardDetailsContainer>
              <CardCompanyName>{hit.title}</CardCompanyName>
              <CardLocationDetails>
                <CardCountryCity>
                  {hit.country}
                  {", "}
                  {hit.city}
                  {" - "}
                </CardCountryCity>
                <CardLocationType>{hit.location_type}</CardLocationType>
              </CardLocationDetails>
              <CardEmploymentType>{hit.employment_type}</CardEmploymentType>
              <PayContainer>
                <CardPay>
                  {hit.pay_currency} {hit.pay}
                </CardPay>
                <CardPayType>{hit.pay_type}</CardPayType>
              </PayContainer>
            </CardDetailsContainer>
            <a href={`${hit.apply_url}`}>Apply</a>
          </ResultsCard>
        );
      })}
      {!isLastPage && (
        <button onClick={showMore} className="ais-InfiniteHits-loadMore">
          Load more
        </button>
      )}
    </ResultsContainer>
  );
};

export default Results;
