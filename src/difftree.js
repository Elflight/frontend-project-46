import _ from 'lodash';

const getDiffTree = (firstObj, secondObj) => {
  // получаем ключи обоих объектов, делаем общий массив и сортируем его
  const keys = _.union(Object.keys(firstObj), Object.keys(secondObj));
  const sortedKeys = _.sortBy(keys);

  return sortedKeys.map((key) => {
    // если в первом объекте нет ключа, то он добавлен
    if (!_.has(firstObj, key)) {
      return { key, value: secondObj[key], type: 'added' };
    }
    // если во втором объекте нет ключа, то он удален
    if (!_.has(secondObj, key)) {
      return { key, value: firstObj[key], type: 'deleted' };
    }
    // если значения ключей неравны, то запись изменена
    if (firstObj[key] !== secondObj[key]) {
      return {
        key, value1: firstObj[key], value2: secondObj[key], type: 'changed',
      };
    }
    // если значения ключей равны, то запись неизменна
    if (firstObj[key] === secondObj[key]) {
      return { key, value: secondObj[key], type: 'unchanged' };
    }

    return false;
  });
};

export default getDiffTree;
