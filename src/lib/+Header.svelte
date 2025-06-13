<script>
  let menuOpen = false;
  import logo from "../lib/assets/static/black.png";
  import Flex from "../lib/+Flex.svelte";
  import Grid from "../lib/+Grid.svelte";
  
</script>

<nav
  class="bg-white text-black w-full flex items-center justify-between h-20 lg:gap-12 lg:py-5
   lg:px-12 sm:px-4 px-2 relative"
>
  <div class="lg:hidden flex items-center justify-items-center">
    <a href="/" class="flex items-center group">
      <img
        src={logo}
        alt="logo"
        class="lg:h-8 lg:w-8 sm:h-8 sm:w-8 rounded-full"
      />
    </a>
  </div>
  <ul
    class="absolute w-full top-14 left-0 flex flex-col lg:flex-row gap-10 lg:gap-12 pl-4 pd-4  font-['Roboto_Flex'] text-[15px] leading-5 lg:static bg-white font-bold
     lg:flex"
    class:hidden={!menuOpen}
  >
    <li>
      <div class="  items-center">
        <a href="/" class="flex items-center group">
          <img
            src={logo}
            alt="Logo"
            class=" hidden lg:flex lg:h-8 lg:w-8 rounded-full"
          />
        </a>
      </div>
    </li>
    <li><a href="/">Home</a></li>
    <li><a href="/Flex">Flex</a></li>
    <li><a href="/Grid">Grid</a></li>

    <li><a href="/Frame">Frame</a></li>
    <li><a href="/Noshesi">Nohesi</a></li>
    <li><a href="/Signin">Signin</a></li>
    <div class="lg:hidden w-full  flex flex-col gap-2 items-center mb-4">
      
      <button
        class="w-40 sm:w-50 md:w-70  font-['Roboto_Flex'] text-sm whitespace-nowrap h-[40px] border-gray-300 rounded-2xl"
        style="background:#F0F0F0"
      >
      <a href="/Signin"
        >Sign in</a>
        
      </button>

      <button
        class="w-40  sm:w-50 md:w-70  font-['Roboto_Flex'] text-sm whitespace-nowrap h-[40px] border-blue-700 rounded-2xl"
        style="background: var(--def, #5C53E9);">Sign Up</button
      >
    </div>
  </ul>
  <button
    type="button"
    aria-label="Toggle menu"
    on:click={() => (menuOpen = !menuOpen)}
    class="lg:hidden"
  >
    <i class="fa-solid fa-bars text-black"></i>
  </button>
  <div class="hidden lg:flex w-50% gap-2">
    <button
      class="font-['Roboto_Flex'] text-[15px] whitespace-nowrap w-[92px] h-[40px] border-gray-300 rounded-2xl"
      style="background:#F0F0F0">sign in</button
    >
    <button
      class="font-['Roboto_Flex'] text-[15px] whitespace-nowrap w-[92px] h-[40px] border-blue-700 rounded-2xl"
      style="background: var(--def, #5C53E9);">sign up</button
    >
  </div>
</nav>
