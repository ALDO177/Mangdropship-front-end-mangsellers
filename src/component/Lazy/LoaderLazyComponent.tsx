
import dynamic from "next/dynamic";

export const ComponentHeader = dynamic(() => import('@/component/LandingPage/ComponentSection1'), {
    loading(loadingProps) {
        return <span>Loading Component Section 1</span>
    },
});

export const ComponentSection2 = dynamic(() => import('@/component/LandingPage/ComponentSection2'), {
    loading(loadingProps) {
        return <span>Loading Component Section 2</span>
    },
});

export const ComponentSection3 = dynamic(() => import('@/component/LandingPage/ComponentSection3'), {
    loading(loadingProps) {
        return <span>Loading Component Section 3</span>
    },
});

export const ComponentSection4 = dynamic(() => import('@/component/LandingPage/ComponentSection4'), {
    loading(loadingProps) {
        return <span>Loading...</span>
    },
});