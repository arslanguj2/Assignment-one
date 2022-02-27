import { defineStore } from "pinia";

export const useFilterStore = defineStore("filters", {
    state: () => ({
        selectedCategories: new Set(),
        selectedRange: null,
    }),
    getters: {
        getFilteredCategories: (state) => state.selectedCategories,
        getFilteredRange: (state) => state.selectedRange,
    },
    actions: {
        updateSelectedCategories(categories) {
            this.selectedCategories = categories;
        },
        updateSelectedRange(range) {
            this.selectedRange = range;
        },
        updateFilters(categories, range) {
            this.selectedCategories = categories;
            this.selectedRange = range;
        },
    },
});
