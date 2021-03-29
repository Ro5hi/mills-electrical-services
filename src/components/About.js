
const About = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto flex h-screen pl-24 float-left" id="about">
                <p class="text-4xl text-left pt-32 pb-12 sm:text-xs md:text-base lg:text-lg xl:text-2xl 2xl:text-xl 3xl:text-3xl 4xl:text-4xl">
                <strong>Samuel L. Mills</strong> is an electrician with 30 years of experience on his tool-belt. 
                Committed to giving high quality results for homeowners and commercial businesses. Highly skilled in
                troubleshooting problems, installation of new equipment, lighting upgrades, and many more!
                <br /><br />
                The Mills Electrical Services is a licensed and bonded business located at Muncie, Indiana.
                </p>
                <img class="float-right object-scale-down pb-40" src="https://visitindiana.com/adportal/Content/FileUploads/55098/Muncie.jpg" alt="muncie"></img>
            </div>
        </div>
    );
};

export default About;