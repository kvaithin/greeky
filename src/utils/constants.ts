const {
  NEO4J_USERNAME = '',
  NEO4J_PASSWORD = '',
  NEO4J_INSTANCE_ID = '',
  NEO4J_INSTANCE_NAME = '',
  ENV,
  GA_TRACKING_ID,
} = process.env;

export {
  NEO4J_USERNAME,
  NEO4J_PASSWORD,
  NEO4J_INSTANCE_ID,
  NEO4J_INSTANCE_NAME,
  ENV,
  GA_TRACKING_ID,
}

export const familyMapping: GodType = {
  is_the_gorgons: "The Gorgons",
  is_titan: "The Titans",
  is_cyclops: "The Cyclops",
  is_hundred_handers: "The 100 Handers",
  is_sisters_of_fate: "The Sisters of Fate",
  is_harpy_sisters: "The Harpy Sisters",
  is_the_old_women: "The Old Women",
  is_nereid: "The Nereids",
  is_okenid: "The Okenid",
  is_pleiad: "The Pleiad",
  is_anemoi: "The Anemoi",
  is_muse: "The Muse",
  is_the_charities: "The Charities",
  is_the_seasons: "The Seasons",
  is_the_pains: "The Pains",
};
