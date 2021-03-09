function makeObjectDeepCopy(obj) {
    let result = {}
    for (let key in obj) {
        if (!(obj[key] instanceof Object)) {
            result[key] = obj[key]
        } else {
            result[key] = makeObjectDeepCopy(obj[key])
        }
    }

    return result
}

function selectFromInterval(iterable, from, to) {
    if (isNaN(from) || isNaN(to) || !Array.isArray(iterable) || iterable.some((el) => isNaN(el))) 
        throw new Error('error message')
    
    if (from > to) {
        [from, to] = [to, from]
    }

    return iterable.filter((el) => el > from && el <= to)
}

const myIterable = {
    from: 2, 
    to: 4,

    [Symbol.iterator]() {
        if (isNaN(this.from) || isNaN(this.to) || this.from > this.to) throw new Error('Не работает, получается')
        this.current = this.from;
        return this;
      },
    
      next() {
        if (this.current <= this.to) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
}