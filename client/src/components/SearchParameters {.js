{
  listingType (string, optional) = ['Sale', 'Rent', 'Share', 'Sold', 'NewHomes'],
  propertyTypes (Array[string], optional),
  propertyFeatures (Array[string], optional),
  listingAttributes (Array[string], optional),
  minBedrooms (number, optional),
  maxBedrooms (number, optional),
  minBathrooms (number, optional),
  maxBathrooms (number, optional),
  minCarspaces (integer, optional),
  maxCarspaces (integer, optional),
  minPrice (integer, optional),
  maxPrice (integer, optional),
  minLandArea (integer, optional),
  maxLandArea (integer, optional)
}
SearchLocation {
  state (string, optional) = ['ACT', 'NSW', 'QLD', 'VIC', 'SA', 'WA', 'NT', 'TAS'],
  region (string, optional),
  area (string, optional),
  suburb (string, optional),
  postCode (string, optional),
  includeSurroundingSuburbs (boolean, optional)
}