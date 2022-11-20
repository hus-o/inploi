export enum LocationType {
  LOCATION = "LOCATION",
  HYBRID = "HYBRID",
  REMOTE = "REMOTE",
}

export const capitaliseFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export const parseEmploymentType = (type: string) => {
  const symbolRemoved = type.replace(/_/g, " ");
  return symbolRemoved.replace(/(\B)[^ ]*/g, (match: string) =>
    match.toLowerCase()
  );
};

export const parseLocationType = (type: LocationType) => {
  switch (type) {
    case LocationType.LOCATION:
      return "In-Person";
    case LocationType.HYBRID:
      return "Hybrid";
    case LocationType.REMOTE:
      return "Remote";
    default:
      return "";
  }
};
