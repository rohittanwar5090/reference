import Row from "./Row";
function HomeBenefits() {
  const logos = [
    "/images/home/home-playstore-w.webp",
    "/images/home/home-apple-w.webp",
  ];

  return (
    <div>
      <Row
        src="/images/home/home-engage-w.webp"
        heading="How Can I Get 2x More Leads?"
        text="Create sharable mini courses and add them to your landing pages, funnels, emails & more... and watch your leads grow rapidly."
        textSec="On average, leads acquired through mini courses are 4x more engaging since they already love your content and your trust is gained."
        btn={true}
      />
      <p className=" text-xl mt-2 text-[#2A3158] text-center px-2 lg:px-8">
        With{" "}
        <span className=" text-[#2275c7] font-bold">
          {" "}
          higher and greater engaging leads
        </span>
        , you can{" "}
        <span className=" text-[#2275c7] font-bold">achieve 3x more sales</span>
        for your online course.
      </p>
      <Row
        first={true}
        src="/images/home/home-engage-w.webp"
        heading="Build Stronger Engaging Communities"
        text=" A Powerful collaboration platform that enables seamless communication
                and interaction with you and your students."
        btn={true}
      />
      <Row
        src="/images/home/home-Always-stay-connected-w.webp"
        heading="Always stay connected"
        text=" Take your community everywhere with our full-fledged mobile
                application for both iOS and Android. A blazing fast app to keep up
                with your speed."
        mobileLogo={logos}
        btn={true}
      />
      <Row
        first={true}
        src="/images/home/home-no-coding-w.webp"
        heading="Websites Personalized for You"
        text="Get beautiful interactive websites to sell your course
                designed by our creators and coders. Your Website, Imagined by you, created by
                us."
        btn={true}
      />
      <div
        style={{
          backgroundImage: "url('/images/home/home-creators-w.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          height: "16rem",
        }}
        className="object-contain mt-10 lg:mt-20 grid place-items-center ">
        <p className="text-center text-white text-xl lg:text-3xl font-extrabold w-1/2 ">
          Join our community of over 300+ course creators and coaches
        </p>
      </div>
      <Row
        first={true}
        src="/images/home/home-analytics-w.webp"
        heading="Make Smarter Decisions"
        text="Get custom analytics for your institute , marketing and sales. See
                how you can boost your  online course in real time."
        btn={true}
      />
      <Row
        src="/images/home/home-fast-secure-hosting-w.webp"
        heading="Fast and Secure Hosting"
        text="No more storage add ons for your content. Just fast and secure
                storage.  And it's unlimited!"
        btn={true}
      />
    </div>
  );
}

export default HomeBenefits;
