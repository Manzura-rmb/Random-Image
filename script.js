const image = document.getElementById("randomImage");
const button = document.getElementById("loadBtn");

const loadImage = async () => {
    try {
        const response = await fetch ("https://picsum.photos/400/300", {
            method: "GET",
            redirect: "follow"
        })
        image.src=response.url;
    }
    catch (err) {
        console.error("Uninstall image:", err)
    }
}
loadImage();