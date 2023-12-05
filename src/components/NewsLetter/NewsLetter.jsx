import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const NewsLetter = () => {
    return (
        <div data-aos="fade-up"  >
            <section  className=" h-[80vh]">
  <div  className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto  sm:text-center">
      <h2 className=" text-white font-cinzel border-l-8 pl-5 border-red-800 md:text-6xl font-bold my-36">
        {" "}
        Sign up to our newsletter
      </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light font-great-vibes text-gray-200 md:mb-12 sm:text-xl dark:text-gray-200 ">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
          <div >
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div className="relative w-full">
                      <label  className="hidden mb-2 text-sm font-medium text-gray-200 dark:text-gray-300">Email address</label>
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      </div>
                      <input className="block p-3 pl-10 w-full text-sm text-gray-200  bg-transparent rounded-lg border border-yellow-500 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required=""/>
                  </div>
                  <div>
                      <button  className="relative z-30 font-cinzel text-base border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-200 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100">Subscribe</button>
                  </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
          </div>
      </div>
  </div>
</section>
        </div>
    );
};

export default NewsLetter;