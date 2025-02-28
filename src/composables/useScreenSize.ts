import { useBreakpoints } from "@vueuse/core";
import { computed, type ComputedRef } from "vue";

export type TResolutions = "mobile" | "desktop";

export enum EDeviceType {
  web = "web",
  mobile = "mobile",
}

const breakpoints: Record<TResolutions, number> = {
  mobile: 0,
  desktop: 992,
};
export const useScreenSize = () => {
  const screenSize = useBreakpoints<TResolutions>(breakpoints);

  const activeBreakpoint: ComputedRef<TResolutions> =
    screenSize.active() as ComputedRef<TResolutions>;

  const isMobile = computed(() => activeBreakpoint.value === "mobile");

  return {
    activeBreakpoint,
    isMobile,
  };
};
