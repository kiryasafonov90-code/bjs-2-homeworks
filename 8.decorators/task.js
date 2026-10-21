// Задача № 1
function cachingDecoratorNew(func) {
  const cache = [];

  function wrapper(...args) {
    const hash = md5(args);
    const cached = cache.find((item) => item.hash === hash);

    if (cached) {
      console.log("Из кеша: " + cached.value);
      return "Из кеша: " + cached.value;
    }

    const result = func.apply(this, args);
    cache.push({ hash, value: result });

    if (cache.length > 5) {
      cache.shift();
    }

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }

  return wrapper;
}

// Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  let firstCall = true;

  function wrapper(...args) {
    wrapper.allCount += 1;

    if (firstCall) {
      firstCall = false;
      wrapper.count += 1;
      func.apply(this, args);
      return;
    }

    clearTimeout(timeoutId);
    const context = this;

    timeoutId = setTimeout(() => {
      wrapper.count += 1;
      func.apply(context, args);
      timeoutId = null;
    }, delay);
  }

  wrapper.count = 0;
  wrapper.allCount = 0;

  return wrapper;
}
