const menu = document.querySelector("#menu");

menu.innerHTML = `
<nav class="bg-neutral-800 border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div
          class="container flex flex-wrap items-center justify-between mx-auto"
        >
          <a href="./home.html" class="flex items-center">
            <span
              class="self-center text-xl pl-5 font-semibold whitespace-nowra"
              >Dashboads</span
            >
          </a>
          <div class="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Search</span>
            </button>
            <div class="relative hidden md:flex items-center">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  class="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                class="block w-full p-2 pl-6 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="        Search..."
              />
              <a title="confing" href="./config.html">
              <svg
                class="w-6 h-6 ml-3 text-gray-400 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
              </a>
                <svg class="w-8 h-8 ml-2 text-gray-400 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
              <a href="#"></a>
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span class="sr-only">Open menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div class="relative mt-3 md:hidden">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  class="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>

              <input
                type="text"
                id="search-navbar"
                class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <ul
              class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0"
            >
              <li>
                <a
                  href="home.html"
                  class="block py-2 pl-3 pr-4 text-gray-100 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 duration-300"
                  >Inicio</a
                >
              </li>
              <li>
                <a
                  href="./dash.html?nome=Loja&dash=eyJrIjoiYmJkNGM3NTgtMWU5OC00ZjgxLWIyYWYtZWFiYjdlNzVhZjE1IiwidCI6Ijg4NzZhMjk2LTFjOTEtNDgzMy05ZDlhLThkNjZjZWNlMzlkYiJ9&pageName=ReportSection"
                  class="block py-2 pl-3 pr-4 text-gray-100 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 duration-300"
                  >Lojas</a
                >
              </li>
              <li>
                <a
                  href="./dash.html?nome=Financeiro&dash=eyJrIjoiNTI1Y2IwYjktNDQwZS00OTkzLTk4MzEtZTI3MDM3NGY0MWYwIiwidCI6Ijg4NzZhMjk2LTFjOTEtNDgzMy05ZDlhLThkNjZjZWNlMzlkYiJ9&pageName=ReportSection5c2b86002a24494d9fe3"
                  class="block py-2 pl-3 pr-4 text-gray-100 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 duration-300"
                  >Financeiro</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
`;
