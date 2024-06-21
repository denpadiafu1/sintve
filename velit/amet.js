import { root, signal, computed, effect, tick } from '@maverick-js/signals';
root((dispose) => {
  const $m = signal(1);
  const $x = signal(1);
  const $b = signal(0);
  const $y = computed(() => $m() * $x() + $b());
  const stop = effect(() => {
    console.log($y());
    return () => {};
  });
  $m.set(10);
  tick();
  $b.set((prev) => prev + 5);
  tick();
});
