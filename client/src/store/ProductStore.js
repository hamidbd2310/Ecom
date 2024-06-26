import create from "zustand";
import axios from "axios";

const ProductStore = create((set) => ({
    BrandList: null,
    BrandListRequest: async () => {
        let res = await axios.get(`/api/ProductBrandList`);
        if (res.data["status"] === "success") {
            set({ BrandList: res.data["data"] })

        }
    },



    CategoryList: null,
    CategoryListRequest: async () => {
        let res = await axios.get(`/api/ProductCategoryList`);
        if (res.data["status"] === "success") {
            set({ CategoryList: res.data["data"] })

        }
    },

    SliderList: null,
    SliderListRequest: async () => {
        let res = await axios.get(`/api/ProductSliderList`);
        if (res.data["status"] === "success") {
            set({ SliderList: res.data['data'] })
        }
    },

    ListByRemark: null,
    ListByRemarkRequest: async (Remark) => {
        let res = await axios.get(`/api/ProductListByRemark/${Remark}`);
        if (res.data["status"] === "success") {
            set({ ListByRemark: res.data["data"] })

        }
    }




}))

export default ProductStore;