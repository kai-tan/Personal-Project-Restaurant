const OrdersActionTypes = {
    FETCH_ORDERS_START: 'FETCH_ORDERS_START',
    FETCH_ORDERS_SUCCESS: 'FETCH_ORDERS_SUCCESS',
    FETCH_ORDERS_FAILURE: 'FETCH_ORDERS_FAILURE',
    FETCH_ADMIN_PENDING_ORDERS_START: 'FETCH_ADMIN_PENDING_ORDERS_START',
    FETCH_ADMIN_PENDING_ORDERS_SUCCESS: 'FETCH_ADMIN_PENDING_ORDERS_SUCCESS',
    FETCH_ADMIN_PENDING_ORDERS_FAILURE: 'FETCH_ADMIN_PENDING_ORDERS_FAILURE',
    SET_ORDER_STATUS_START: 'SET_ORDER_STATUS_START',
    SET_ORDER_STATUS_SUCCESS: 'SET_ORDER_STATUS_SUCCESS', 
    SET_ORDER_STATUS_FAILURE: 'SET_ORDER_STATUS_FAILURE',
    ADMIN_DELETE_ORDER_START: 'ADMIN_DELETE_ORDER_START',
    ADMIN_DELETE_ORDER_SUCCESS: 'ADMIN_DELETE_ORDER_SUCCESS', 
    ADMIN_DELETE_ORDER_FAILURE: 'ADMIN_DELETE_ORDER_FAILURE',
    ADD_ADMIN_START: 'ADD_ADMIN_START',
    ADD_ADMIN_SUCCESS: 'ADD_ADMIN_SUCCESS', 
    ADD_ADMIN_FAILURE: 'ADD_ADMIN_FAILURE'
}

export default OrdersActionTypes;