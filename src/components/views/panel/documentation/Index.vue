<template>
  <div class="app-body">
    <div class="row-col">
      <div class="col-sm-3 col-lg-2 b-r">
        <div class="p-y">
          <div class="nav-active-border left b-primary">
            <ul class="nav nav-sm">
              <li class="nav-item">
                <a class="nav-link block active" href="#" data-toggle="tab" data-target="#tab-1">Docs 1</a>
              </li>
              <li class="nav-item">
                <a class="nav-link block" href="#" data-toggle="tab" data-target="#tab-2">Docs 2</a>
              </li>
              <li class="nav-item">
                <a class="nav-link block" href="#" data-toggle="tab" data-target="#tab-3">Docs 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-sm-9 col-lg-10 light bg">
        <div class="tab-content pos-rlt">
          <div class="tab-pane active" id="tab-1">
            <div class="p-a-md b-b _600">Document 1</div>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prioris generis est docilitas, memoria; Qui enim voluptatem
              ipsam contemnunt, iis licet dicere se acupenserem maenae non anteponere. Hoc loco tenere se Triarius non potuit.
              Non ego tecum iam ita iocabor, ut isdem his de rebus, cum L. Dulce amarum, leve asperum, prope longe, stare
              movere, quadratum rotundum. Duo Reges: constructio interrete. Idem iste, inquam, de voluptate quid sentit?
              </p>

            <p>At iste non dolendi status non vocatur voluptas. Quorum altera prosunt, nocent altera. Nobis aliter videtur,
              recte secusne, postea; Sin aliud quid voles, postea. </p>

          </div>
          <div class="tab-pane" id="tab-2">
            <div class="p-a-md b-b _600">Document 2</div>
            <p>Erat enim Polemonis. An quod ita callida est, ut optime possit architectari voluptates? Gloriosa ostentatio in
              constituendo summo bono. Conferam tecum, quam cuique verso rem subicias; Expectoque quid ad id, quod quaerebam,
              respondeas. Primum Theophrasti, Strato, physicum se voluit; Theophrasti igitur, inquit, tibi liber ille placet
              de beata vita? </p>

            <p>Hoc non est positum in nostra actione. Ergo ita: non posse honeste vivi, nisi honeste vivatur? Quonam, inquit,
              modo? Ut enim consuetudo loquitur, id solum dicitur honestum, quod est populari fama gloriosum. Ego vero volo
              in virtute vim esse quam maximam; Quamquam haec quidem praeposita recte et reiecta dicere licebit. </p>
          </div>
          <div class="tab-pane" id="tab-3">
            <div class="p-a-md b-b _600">Document 3</div>
            <p>Nihilo beatiorem esse Metellum quam Regulum. Quaesita enim virtus est, non quae relinqueret naturam, sed quae
              tueretur. Quae cum essent dicta, finem fecimus et ambulandi et disputandi. Quid est enim aliud esse versutum?
              Roges enim Aristonem, bonane ei videantur haec: vacuitas doloris, divitiae, valitudo; Nosti, credo, illud:
              Nemo pius est, qui pietatem-; Expectoque quid ad id, quod quaerebam, respondeas. </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    // sets meta title
    name: 'documentation',
    metaInfo: {
      title: 'Roladesk' + ' | Documentation',
      // override the parent template and just use the above title only
      titleTemplate: null
    },
    mounted: function () {
      this.$store.state.pageTitle = 'Documentation'
      if (this.$store.state.dataRefreshed == true) this.$router.push({
        name: 'Initialize'
      })
    }
  }

</script>
