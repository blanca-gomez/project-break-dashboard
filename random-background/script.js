const randomImage = [];
randomImage.push("/project-break-dashboard/images/image-1.jpg");
randomImage.push("/project-break-dashboard/images/image-2.jpg");
randomImage.push("/project-break-dashboard/images/image-3.jpg");
randomImage.push("/project-break-dashboard/images/image-5.jpg");
randomImage.push("/project-break-dashboard/images/image-6.jpg");
randomImage.push("/project-break-dashboard/images/image-7.jpg");
randomImage.push("/project-break-dashboard/images/image-8.jpg");
randomImage.push("/project-break-dashboard/images/image-9.jpg");
randomImage.push("/project-break-dashboard/images/image-10.jpg");
randomImage.push("/project-break-dashboard/images/image-11.jpg");
randomImage.push("/project-break-dashboard/images/image-12.jpg");
randomImage.push("/project-break-dashboard/images/image-13.jpg");
randomImage.push("/project-break-dashboard/images/image-14.jpg");
randomImage.push("/project-break-dashboard/images/image15.jpg");

function loadRandomImage () {
    let azar = Math.floor(Math.random() * randomImage.length);
    document.body.style.backgroundImage = `url('${randomImage[azar]}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
}

setInterval(loadRandomImage, 10000);