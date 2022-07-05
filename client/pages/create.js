const Create = () => {
  return (
    <div class="h-screen  flex-col">
      <div class="card  bg-base-100 shadow-xl w-full h-full text-gray-900">
        <figure class="px-10 pt-10">
          <img src="/" alt="Create a Blog" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Write Here !</h2>
          <input
            type="text"
            placeholder="Tittle"
            class="input input-bordered  text-gray-900 input-lg w-full "
          />

          <div class=" w-full">
            <textarea
              class="input input-bordered  text-gray-900 input-lg w-full h-full"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Your message"
            ></textarea>
          </div>

          <div class="card-actions">
            <button class="btn btn-primary">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
