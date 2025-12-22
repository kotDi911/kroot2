// const videoPreview = process.env.PUBLIC_URL + "/assets/g_kroot/video/g-kroot_1080.mp4";
const videoPreview = "https://thekroot.com/assets/g_kroot/video/g-kroot_1080.mp4";

const PreviewSection = () => {
    return (
        <section className="container-80 text-center">
            <h1 className="h1">
                Generation
                <span className="gray">Kroot</span>
            </h1>
            <video className="mt-32 mb-32 g-kroot-v" muted autoPlay loop playsInline>
                <source className="video" src={videoPreview}/>
            </video>
            <h1 className="h1">
                Experience from the<br/>best Supervisors
            </h1>
        </section>
    )
}
export default PreviewSection