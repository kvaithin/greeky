interface NodeParams extends GroupType {
  name?: string | null,
  alias?: string | null,
  group?: string | null,
  gender?: string | null,
}

interface GroupType {
  is_titan?: string | null,
  is_cyclops?: string | null,
  is_hundred_handers?: string | null,
  is_sisters_of_fate?: string | null,
  is_harpy_sisters?: string | null,
  is_the_old_women?: string | null,
  is_the_gorgons?: string | null,
  is_nereid?: string | null,
  is_okenid?: string | null,
  is_pleiad?: string | null,
  is_anemoi?: string | null,
  is_muse?: string | null,
  is_the_charities?: string | null,
  is_the_seasons?: string | null,
  is_the_pains?: string | null,
}

type StateType = {
  god: GodType,
  adjacentGod: GodType,
  showToast: boolean,
  graphData: object,
  shortestPathData: object,
  relation: string,
}

type SearchType = {
  isMainNode?: boolean,
  isShortestPathNode?: boolean,
  placeholder?: string,
}

type ActionType = {
  addGod: (god: GodType) => void,
  addAdjacentGod: (god: GodType) => void,
  removeGod: (id: string) => void,
  toggleToast: (showToast: boolean) => void,
  addGraphData: (graphData: object) => void,
  addShortestPathData: (shortestPathData: object) => void,
  addRelation: (relation: string) => void,
}

interface GodType extends GroupType {
  name?: string,
  alias?: string,
  gender?: string,
  is_the_gorgons?: string,
  is_titan?: string,
  is_cyclops?: string,
  is_hundred_handers?: string,
  is_sisters_of_fate?: string,
  is_harpy_sisters?: string,
  is_the_old_women?: string,
  is_nereid?: string,
  is_okenid?: string,
  is_pleiad?: string,
  is_anemoi?: string,
  is_muse?: string,
  is_the_charities?: string,
  is_the_seasons?: string,
  is_the_pains?: string,
}

type ToastType = {
  message: string,
  bgColor?: string,
  textColor?: string,
  waitTime?: number,
};

type GodContainerType = {
  isGod?: boolean,
  isAdjacentGod?: boolean,
}

type ShortestPathType = {
  nodes?: [],
  links?: [],
}
