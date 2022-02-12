<script>
</script>

<main>
  <div class="flex flex-col items-center overflow-hidden">
    <img src="/assets/logo.svg" alt="logo" class="py-12" />
    <div class="bg-white p-8 rounded-t-3xl">
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
          class="bg-cstm-neutral-light-grayish-cyan-two text-right font-bold text-cstm-neutral-dark-cyan rounded-md py-2"
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
        <div class="grid grid-cols-2 gap-4">
          <button
            class="bg-cstm-neutral-dark-cyan text-white font-bold rounded-md py-1"
            >5%</button
          >
          <button
            class="bg-cstm-neutral-dark-cyan text-white font-bold rounded-md py-1"
            >10%</button
          >
          <button
            class="bg-cstm-neutral-dark-cyan text-white font-bold rounded-md py-1"
            >15%</button
          >
          <button
            class="bg-cstm-neutral-dark-cyan text-white font-bold rounded-md py-1"
            >25%</button
          >
          <button
            class="bg-cstm-neutral-dark-cyan text-white font-bold rounded-md py-1"
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
          class="bg-cstm-neutral-light-grayish-cyan-two text-right font-bold text-cstm-neutral-dark-cyan rounded-md py-2"
        />
        <img
          src="/assets/icon-person.svg"
          alt="person icon"
          class="absolute bottom-4 left-4"
        />
      </div>

      <!-- amount summary -->
      <div class="bg-cstm-neutral-dark-cyan p-5 rounded-2xl mt-10 space-y-6">
        <div class="flex justify-between items-center font-bold">
          <p class="text-cstm-neutral-light-grayish-cyan-two text-base">
            Tip Amount <br />
            <span class="text-cstm-neutral-dark-grayish-cyan-two text-sm"
              >/ person</span
            >
          </p>
          <p class="text-cstm-primary-strong-cyan text-3xl">$4.27</p>
        </div>
        <div class="flex justify-between items-center font-bold">
          <p class="text-cstm-neutral-light-grayish-cyan-two text-base">
            Total <br /><span
              class="text-cstm-neutral-dark-grayish-cyan-two text-sm"
              >/ person</span
            >
          </p>
          <p class="text-cstm-primary-strong-cyan text-3xl">$32.79</p>
        </div>
        <button
          class="bg-cstm-primary-strong-cyan font-bold w-full rounded-md py-1 uppercase"
          >Reset</button
        >
      </div>
    </div>
  </div>
</main>
