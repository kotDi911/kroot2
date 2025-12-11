const videoPreview = process.env.PUBLIC_URL + "/assets/g_kroot/video/g-kroot_1080.mp4";

const PreviewSection = () => {
    return (
        <section className="container-80">
            <h1 className="h1 black">
                Generation
                <span className="gray">Kroot</span>
            </h1>
            <video className="mt-32 mb-32 video-cont" width="100%" muted autoPlay loop playsInline>
                <source className="video" src={videoPreview}/>
            </video>
            <h1 className="h1 black">
                Experience from the<br/>best Supervisors
            </h1>
        </section>
    )
}
export default PreviewSection