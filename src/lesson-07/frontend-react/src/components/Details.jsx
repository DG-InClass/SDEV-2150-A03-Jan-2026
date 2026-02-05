export default function Details() {
    return <>
        <section class="h-full">
        <div class="bg-white rounded-lg shadow h-full flex flex-col">
          <div class="border-b px-6 py-4 font-semibold bg-gray-50">
            Details
          </div>

          <div class="px-6 py-4 flex-1">
            <h2 class="text-lg font-semibold">Peer Tutoring Centre</h2>
            <p class="text-gray-600 mb-2">Drop-in tutoring and study support.</p>

            <dl class="grid grid-cols-4 gap-4 mb-0">
              <dt class="col-span-1 font-semibold">Category</dt>
              <dd class="col-span-3">Academic</dd>

              <dt class="col-span-1 font-semibold">Location</dt>
              <dd class="col-span-3">Building W, Room W101</dd>

              <dt class="col-span-1 font-semibold">Hours</dt>
              <dd class="col-span-3">Mon-Thu 10:00-16:00</dd>

              <dt class="col-span-1 font-semibold">Contact</dt>
              <dd class="col-span-3">tutoring@nait.ca</dd>
            </dl>
          </div>

          <div class="border-t px-6 py-4 bg-gray-50 flex gap-2">
            <button class="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition" type="button">Copy email</button>
            <button class="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50 transition" type="button">Open map</button>
          </div>
        </div>
      </section>
    </>
}