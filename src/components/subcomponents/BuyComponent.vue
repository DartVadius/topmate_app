<template>
  <!--==========================
        Buy Ticket Section
      ============================-->
  <section id="buy-topmat" class="section-with-bg wow fadeInUp">
    <div class="container">

      <div class="section-header">
        <h2>Buy</h2>
        <p>butyl sound deadener materials and equipment</p>
      </div>

      <div class="row">
        <div class="col-lg-4">
          <div class="card mb-5 mb-lg-0">
            <div class="card-body">
              <h5 class="card-title text-muted text-uppercase text-center">36 sqf pack</h5>
              <h6 class="card-price text-center">$50</h6>
              <div class="hotel-img">
                <img src="@/assets/img/materials/dominator-foil.png" alt="Hotel 1" class="img-fluid">
              </div>
              <hr>
              <div class="text-center">
                <button type="button" class="btn"><i class="fab fa-amazon fa-lg"></i> Buy on Amazon</button>
              </div>
              <hr>
              <ul class="fa-ul">
                <li><span class="fa-li"><i class="fa fa-check"></i></span>Coverage area: 36 sq.feet</li>
                <li><span class="fa-li"><i class="fa fa-check"></i></span>Number of sheets in the stack: 18</li>
                <li><span class="fa-li"><i class="fa fa-check"></i></span>Pack weight:</li>
                <li><span class="fa-li"><i class="fa fa-check"></i></span>Item Weight:</li>
                <li><span class="fa-li"><i class="fa fa-check"></i></span>Item Thickness:</li>
                <li><span class="fa-li"><i class="fa fa-check"></i></span>Dimensions, inches: </li>
                <li><span class="fa-li"><i class="fa fa-check"></i></span>Exterior: Aluminiun Foil with TopMat Logo</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card mb-5 mb-lg-0">
            <div class="card-body">
              <h5 class="card-title text-muted text-uppercase text-center">18 sqf pack</h5>
              <h6 class="card-price text-center">$25</h6>
              <div class="hotel-img">
                <img src="@/assets/img/materials/dominator-foil.png" alt="Hotel 1" class="img-fluid">
              </div>
              <hr>
              <div class="text-center">
                <button type="button" class="btn" disabled>Coming soon</button>
              </div>
              <hr>
              <ul class="fa-ul">
                <li><span class="fa-li"><i class="fa fa-check"></i></span>Coverage area: 18 sq.feet</li>
                <li><span class="fa-li"><i class="fa fa-check"></i></span>Number of sheets in the stack: 9</li>
                <li><span class="fa-li"><i class="fa fa-check"></i></span>Pack weight:</li>
                <li><span class="fa-li"><i class="fa fa-check"></i></span>Item Weight:</li>
                <li><span class="fa-li"><i class="fa fa-check"></i></span>Item Thickness:</li>
                <li><span class="fa-li"><i class="fa fa-check"></i></span>Dimensions, inches: </li>
                <li><span class="fa-li"><i class="fa fa-check"></i></span>Exterior: Aluminiun Foil with TopMat Logo</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Pro Tier -->
        <div class="col-lg-4">
          <div class="card h-100">
            <div class="card-body h-100">
              <h5 class="card-title text-muted text-uppercase text-center">Roller</h5>
              <h6 class="card-price text-center">$10</h6>
              <div class="hotel-img">
                <img src="@/assets/img/materials/dominator-foil.png" alt="Hotel 1" class="img-fluid">
              </div>
              <hr>
              <div class="text-center">
                <button type="button" class="btn" disabled>Coming soon</button>
              </div>
              <hr>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Modal Order Form -->
    <div id="buy-ticket-modal" class="modal fade">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Buy Tickets</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form method="POST" action="#">
              <div class="form-group">
                <input type="text" class="form-control" name="your-name" placeholder="Your Name">
              </div>
              <div class="form-group">
                <input type="text" class="form-control" name="your-email" placeholder="Your Email">
              </div>
              <div class="form-group">
                <select id="ticket-type" name="ticket-type" class="form-control" >
                  <option value="">-- Select Your Ticket Type --</option>
                  <option value="standard-access">Standard Access</option>
                  <option value="pro-access">Pro Access</option>
                  <option value="premium-access">Premium Access</option>
                </select>
              </div>
              <div class="text-center">
                <button type="submit" class="btn">Buy Now</button>
              </div>
            </form>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

  </section>
</template>

<script>
export default {
  name: 'BuyComponent'
}
</script>

<style scoped>

</style>
