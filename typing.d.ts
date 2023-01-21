export interface ImageInterface {
    img: any,
    title: string
}

export interface LightBoxPropsInterface {
    images: ImageInterface[],
    showMiniuature?: boolean
}
