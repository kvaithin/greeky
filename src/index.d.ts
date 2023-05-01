type NodeParams = {
  name?: string | null,
  alias?: string | null,
  group?: string | null,
  gender?: string | null,
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
};

type StateType = {
  god: GodType,
  showToast: boolean,
}

type ActionType = {
  addGod: (god: GodType) => void,
  removeGod: (id: string) => void,
  toggleToast: (showToast: boolean) => void,
}

type GodType = {
  name?: string,
  alias?: string,
  gender?: string,
}

type ToastType = {
  message: string,
  bgColor?: string,
  textColor?: string,
};
