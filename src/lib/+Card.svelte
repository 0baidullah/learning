<script>
  import img1 from "../lib/assets/static/download.jpeg";
</script>

<!-- <div
  class="w-full h-full  sm:w-1/2 md:w-1/3 lg:w-1/4 border-2 border-red-800 rounded-lg mx-5 px-2 py-2"
>
  <div class="h-[60%] sm:[40%]  border-2 border-black-800 rounded-lg">
    <img
      src={img1}
      alt="img1"
      class="w-full h-full object-cover rounded-t-lg"
    />
  </div>
  <div class="h-[40%] border-2 border-green-800 rounded-lg">
    <div class="h-[20%] flex justify-around border-2 border-red-800 rounded-lg">
      <div>
        <button class="bg-blue-500 text-white px-4 rounded">-</button>
      </div>
      <div>
        <button class="bg-yellow-500 text-white px-4 rounded"
          >Add to cart</button
        >
      </div>
      <div>
        <button class="bg-blue-500 text-white px-4 rounded">+</button>
      </div>
    </div>
    <div class="h-[20%] border-2 border-yellow-800 rounded-lg overflow-hidden">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        magnam! Facere odit repudiandae numquam, dolor perspiciatis labore
        harum, nihil quaerat velit aliquid ex a. Officia quasi error architecto
        repudiandae at!
      </p>
    </div>
  </div>
</div> -->



<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-2 px-4 sm:px-8 ">
  <!-- Card Start -->
  <div class="w-full border-2 border-red-800 rounded-lg px-2 py-2">
    <div class="h-48 border-2 border-black-800 rounded-lg overflow-hidden">
      <img
        src={img1}
        alt="img1"
        class="w-full h-full object-cover rounded-t-lg"
      />
    </div>
    <div class="mt-2 border-2 border-green-800 rounded-lg p-2 space-y-2">
      <div class="flex justify-around border-2 border-red-800 rounded-lg p-1">
        <button class="bg-blue-500 text-white px-4 rounded">-</button>
        <button class="bg-yellow-500 text-white px-4 rounded">Add to cart</button>
        <button class="bg-blue-500 text-white px-4 rounded">+</button>
      </div>
      <div class="border-2 border-yellow-800 rounded-lg overflow-hidden p-1 text-sm">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          magnam! Facere odit repudiandae numquam dolor.
        </p>
      </div>
    </div>
  </div>
  <!-- Card End -->

  <!-- Repeat 3 more cards -->
  <div class="w-full border-2 border-red-800 rounded-lg px-2 py-2">
    <div class="h-48 border-2 border-black-800 rounded-lg overflow-hidden">
      <img
      src={img1}
        alt="img1"
        class="w-full h-full object-cover rounded-t-lg"
      />
    </div>
    <div class="mt-2 border-2 border-green-800 rounded-lg p-2 space-y-2">
      <div class="flex justify-around border-2 border-red-800 rounded-lg p-1">
        <button class="bg-blue-500 text-white px-4 rounded">-</button>
        <button class="bg-yellow-500 text-white px-4 rounded">Add to cart</button>
        <button class="bg-blue-500 text-white px-4 rounded">+</button>
      </div>
      <div class="border-2 border-yellow-800 rounded-lg overflow-hidden p-1 text-sm">
        <p>Aliquam molestias repellendus quos dolore doloribus cumque est.</p>
      </div>
    </div>
  </div>

  <div class="w-full border-2 border-red-800 rounded-lg px-2 py-2">
    <div class="h-48 border-2 border-black-800 rounded-lg overflow-hidden">
      <img
        src={img1}
        alt="img1"
        class="w-full h-full object-cover rounded-t-lg"
      />
    </div>
    <div class="mt-2 border-2 border-green-800 rounded-lg p-2 space-y-2">
      <div class="flex justify-around border-2 border-red-800 rounded-lg p-1">
        <button class="bg-blue-500 text-white px-4 rounded">-</button>
        <button class="bg-yellow-500 text-white px-4 rounded">Add to cart</button>
        <button class="bg-blue-500 text-white px-4 rounded">+</button>
      </div>
      <div class="border-2 border-yellow-800 rounded-lg overflow-hidden p-1 text-sm">
        <p>Facere odit repudiandae numquam, dolor perspiciatis labore harum.</p>
      </div>
    </div>
  </div>

  <div class="w-full border-2 border-red-800 rounded-lg px-2 py-2">
    <div class="h-48 border-2 border-black-800 rounded-lg overflow-hidden">
      <img
        src={img1}
        alt="img1"
        class="w-full h-full object-cover rounded-t-lg"
      />
    </div>
    <div class="mt-2 border-2 border-green-800 rounded-lg p-2 space-y-2">
      <div class="flex justify-around border-2 border-red-800 rounded-lg p-1">
        <button class="bg-blue-500 text-white px-4 rounded">-</button>
        <button class="bg-yellow-500 text-white px-4 rounded">Add to cart</button>
        <button class="bg-blue-500 text-white px-4 rounded">+</button>
      </div>
      <div class="border-2 border-yellow-800 rounded-lg overflow-hidden p-1 text-sm">
        <p>Ex a. Officia quasi error architecto repudiandae at!</p>
      </div>
    </div>
  </div>
</div>
