import React from "react";

const TestFooter = () => {
  return (
    <footer class="bg-[#f2eded] py-12 px-10 font-sans tracking-wide">
    <div class="lg:max-w-[50%] mx-auto text-center">
      <h3 class="text-3xl font-bold text-gray-800">Contacter Nous</h3>
      <p class="text-sm mt-6 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquam sapiente quis eum laboriosam corrupti. Obcaecati, laudantium assumenda, deserunt ea aliquam quo odit praesentium at aliquid vitae atque nemo placeat explicabo commodi dolorem tempore delectus aperiam. Magnam accusamus quasi totam autem distinctio natus vero! Obcaecati a ipsam reprehenderit odit natus?</p>

      
    </div>

    <hr class="border-gray-300 my-12" />

    <div class="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-8">

      <div>
        <h4 class="text-lg font-bold mb-6 text-gray-800">About Us</h4>
        <p class="text-gray-500 mb-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida,
          mi eu pulvinar cursus, sem elit interdum mauris.</p>
      </div>

      <div>
        <h4 class="text-lg font-bold mb-6 text-gray-800">Services</h4>
        <ul class="space-y-4">
          <li><a href="javascript:void(0)" class="text-gray-500 hover:text-gray-800 text-[15px]">Web
            Development</a></li>
          <li><a href="javascript:void(0)" class="text-gray-500 hover:text-gray-800 text-[15px]">Mobile App
            Development</a></li>
          <li><a href="javascript:void(0)" class="text-gray-500 hover:text-gray-800 text-[15px]">UI/UX
            Design</a></li>
          <li><a href="javascript:void(0)" class="text-gray-500 hover:text-gray-800 text-[15px]">Digital Marketing</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-lg font-bold mb-6 text-gray-800">Resources</h4>
        <ul class="space-y-4">
          <li><a href="javascript:void(0)" class="text-gray-500 hover:text-gray-800 text-[15px]">Webinars</a>
          </li>
          <li><a href="javascript:void(0)" class="text-gray-500 hover:text-gray-800 text-[15px]">Ebooks</a>
          </li>
          <li><a href="javascript:void(0)" class="text-gray-500 hover:text-gray-800 text-[15px]">Templates</a>
          </li>
          <li><a href="javascript:void(0)" class="text-gray-500 hover:text-gray-800 text-[15px]">Tutorials</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-lg font-bold mb-6 text-gray-800">About Us</h4>
        <ul class="space-y-4">
          <li><a href="javascript:void(0)" class="text-gray-500 hover:text-gray-800 text-[15px]">Our Story</a>
          </li>
          <li><a href="javascript:void(0)" class="text-gray-500 hover:text-gray-800 text-[15px]">Mission and
            Values</a></li>
          <li><a href="javascript:void(0)" class="text-gray-500 hover:text-gray-800 text-[15px]">Team</a></li>
          <li><a href="javascript:void(0)" class="text-gray-500 hover:text-gray-800 text-[15px]">Testimonials</a></li>
        </ul>
      </div>
    </div>
  </footer>
  );
};

export default TestFooter;
