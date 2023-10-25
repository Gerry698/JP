let DameDaneParticleDemo = new DameDaneParticle(document.getElementById('akCanvas'), {
  src: './image/penguin.png',
  renderX: 30,
  renderY: 100,
  w: 300,
  size: 1.2,
  spacing: 1.2,
  validColor: {
    min: 300,
    max: 765,
    invert: false
  },
  effectParticleMode: 'repulsion',
  Thickness: 25,
})
gz();

function gz() {
  DameDaneParticleDemo.ChangeImg('./image/gz.png', { w: 500 })
}

function ch() {
  DameDaneParticleDemo.ChangeImg('./image/ch.png', { w: 500 })
}


function ri() {
  DameDaneParticleDemo.ChangeImg('./image/ri.png', { w: 400 })
}

function lm() {
  DameDaneParticleDemo.ChangeImg('./image/lm.png', { w: 400 })
}

function pl() {
  DameDaneParticleDemo.ChangeImg('./image/pl.png', { w: 300 })
}

function rl() {
  DameDaneParticleDemo.ChangeImg('./image/rl.png', { w: 450 })
}

function ru() {
  DameDaneParticleDemo.ChangeImg('./image/ru.jpg', { w: 250 })
}

