/* eslint-disable */

export function showPlanets(vue, game, group1, group2) {

    game.physics.add.collider(group1, group2, (projectile, enemy) => {
    console.log('collision');
        });
      }


 
