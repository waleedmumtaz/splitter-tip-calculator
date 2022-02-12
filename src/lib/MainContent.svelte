<script>
</script>

<main>
  <div class="flex flex-col items-center md:px-5">
    <img src="/assets/logo.svg" alt="logo" class="py-12 md:pt-0" />
    <div
      class="bg-white px-5 py-8 md:p-8 rounded-t-3xl md:rounded-3xl md:w-full md:max-w-4xl md:mx-auto"
    >
      <div class="md:grid md:grid-cols-2 md:items-center md:gap-8">
        <!-- grid 1 -->
        <div>
          <!-- bill -->
          <div class="flex flex-col gap-1 relative">
            <label
              for="bill"
              class="text-base font-bold text-cstm-neutral-dark-grayish-cyan-one"
              >Bill</label
            >
            <input
              type="number"
              id="bill"
              value="142.55"
              class="bg-cstm-neutral-light-grayish-cyan-two text-right font-bold text-cstm-neutral-dark-cyan rounded-md p-2 focus:outline focus:outline-2 focus:outline-cstm-primary-strong-cyan"
            />
            <img
              src="/assets/icon-dollar.svg"
              alt="dollar icon"
              class="absolute bottom-4 left-4"
            />
          </div>

          <!-- tip selection -->
          <div class="mt-10">
            <p
              class="text-base font-bold text-cstm-neutral-dark-grayish-cyan-one mb-3"
            >
              Select Tip %
            </p>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <button
                class="bg-cstm-neutral-dark-cyan text-white font-bold rounded-md py-1 hover:bg-cstm-neutral-light-grayish-cyan-one hover:text-black"
                >5%</button
              >
              <button
                class="bg-cstm-neutral-dark-cyan text-white font-bold rounded-md py-1 hover:bg-cstm-neutral-light-grayish-cyan-one hover:text-black"
                >10%</button
              >
              <button
                class="bg-cstm-neutral-dark-cyan text-white font-bold rounded-md py-1 hover:bg-cstm-neutral-light-grayish-cyan-one hover:text-black"
                >15%</button
              >
              <button
                class="bg-cstm-neutral-dark-cyan text-white font-bold rounded-md py-1 hover:bg-cstm-neutral-light-grayish-cyan-one hover:text-black"
                >25%</button
              >
              <button
                class="bg-cstm-neutral-dark-cyan text-white font-bold rounded-md py-1 hover:bg-cstm-neutral-light-grayish-cyan-one hover:text-black"
                >50%</button
              >
              <button
                class="bg-cstm-neutral-light-grayish-cyan-two rounded-md font-bold text-cstm-neutral-dark-grayish-cyan-one"
                >Custom</button
              >
            </div>
          </div>

          <!-- number of people -->
          <div class="mt-10 flex flex-col gap-1 relative">
            <label
              for="people"
              class="text-base font-bold text-cstm-neutral-dark-grayish-cyan-one"
              >Number of People</label
            >
            <input
              type="number"
              id="people"
              value="5"
              class="bg-cstm-neutral-light-grayish-cyan-two text-right font-bold text-cstm-neutral-dark-cyan rounded-md p-2 focus:outline focus:outline-2 focus:outline-cstm-primary-strong-cyan"
            />
            <img
              src="/assets/icon-person.svg"
              alt="person icon"
              class="absolute bottom-4 left-4"
            />
          </div>
        </div>

        <!-- grid 2 -->
        <div class="md:bg-cstm-neutral-dark-cyan md:rounded-2xl md:h-full">
          <!-- amount summary -->
          <div
            class="bg-cstm-neutral-dark-cyan p-5 md:p-10 rounded-2xl mt-10 md:mt-0 md:flex md:flex-col md:justify-between md:h-full"
          >
            <div class="space-y-6">
              <div class="flex justify-between items-center font-bold">
                <p class="text-cstm-neutral-light-grayish-cyan-two text-base">
                  Tip Amount <br />
                  <span class="text-cstm-neutral-dark-grayish-cyan-two text-sm"
                    >/ person</span
                  >
                </p>
                <p class="text-cstm-primary-strong-cyan text-3xl md:text-5xl">
                  $4.27
                </p>
              </div>
              <div class="flex justify-between items-center font-bold">
                <p class="text-cstm-neutral-light-grayish-cyan-two text-base">
                  Total <br /><span
                    class="text-cstm-neutral-dark-grayish-cyan-two text-sm"
                    >/ person</span
                  >
                </p>
                <p class="text-cstm-primary-strong-cyan text-3xl md:text-5xl">
                  $32.79
                </p>
              </div>
            </div>
            <button
              class="bg-cstm-primary-strong-cyan hover:bg-cstm-neutral-light-grayish-cyan-one font-bold w-full rounded-md py-1 uppercase mt-8 md:mt-0"
              >Reset</button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
