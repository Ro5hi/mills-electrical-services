
const About = () => {
    return (
        <div className="bg-white flex">
            <div className="container mx-auto content-center pl-12 pr-12 h-screen w-screen float-left xl:flex" id="about">
                <p class="text-left pt-32 pb-12 sm:text-lg md:text-base lg:text-lg xl:text-2xl 2xl:text-xl 3xl:text-3xl 4xl:text-4xl">
                <strong>Samuel L. Mills</strong> is an electrician with 30 years of experience on his tool-belt. 
                Committed to giving high quality results for homeowners and commercial businesses. Highly skilled in
                troubleshooting problems, installation of new equipment, lighting upgrades, and much more!
                <br /><br />
                The Mills Electric Service is a licensed and bonded business located at Muncie, Indiana.
                </p>
                <img class="flex float-right align-top object-scale-down pb-40 justify-center lg:pl-12 lg:pr-12 xs:object-contain md:object-contain lg:object-scale-down" src="https://visitindiana.com/adportal/Content/FileUploads/55098/Muncie.jpg" alt="muncie"></img>
            </div>
        </div>
    );
};

export default About;