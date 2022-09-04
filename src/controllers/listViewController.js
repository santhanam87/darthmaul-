import createStore from '../store';
import listViewAPI from '../store/services/listView';

const ListViewController = async (req, res) => {
    const store = createStore();
    await Promise.all(listViewAPI.util.getRunningOperationPromises());
};

export default ListViewController;
