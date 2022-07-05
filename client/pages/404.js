const NotFound = () => {
  return (
    <div class="h-screen flex-col m-9 items-stretch">
      <div class="card h-150 bg-error shadow-xl content-center ">
        <div class="card-body text-center ">
          <p class="card-title justify-center text-3xl">
            Oppppppppsssss! Not Found
          </p>
          <p class="text xl">Redirecting to Homepage</p>
          <div class="card-actions justify-center">
            <button class="btn btn-danger mt-9">Go to back to HomePage</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
