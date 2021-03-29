import Town from './Town'

const About = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto flex justify-center h-screen pt-20" id="about">
                <p class="text-4xl text-left">
                <strong>Samuel L. Mills</strong> is an electrician with 30 years of experience on his tool-belt. 
                Committed to giving high quality results for homeowners and commercial businesses. Highly skilled in
                troubleshooting problems, installation of new equipment, lighting upgrades, and many more!
                <br /><br />
                The Mills Electrical Services is a licensed and bonded business located at Muncie, Indiana.
                </p>
            </div>
            <Town />
        </div>
    );
};

export default About;