let music = ["Джаз", "Блюз",];
music.push("Рок-н-ролл");
alert(music);
//
for (i = 0; i <= (music.length/2 + 1); i++) {
    if (i == (Math.floor(music.length / 2) + 1)) {
        music[i-1] = "Классика";
    }
}
alert(music);
alert(music.shift());
music.unshift("Рэп", "Регги");