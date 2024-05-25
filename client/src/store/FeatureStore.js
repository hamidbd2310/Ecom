import create from 'zustand';
import axios from 'axios';

const FeaturesStore=create((set)=>({
    FeaturesList:null,
    FeaturesListRequest:async()=>{
        let res=await axios.get(`/api/FeaturesList`)
        if (res.data['status']=='success'){
            set({FeaturesList:res.data['data']})
        }
    }
}))

export default FeaturesStore;
