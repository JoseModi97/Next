/* tslint:disable */
/* eslint-disable */
/**
 * shopping-cart Api Documentation
 * shopping-cart Api Documentation
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@shopping_cart.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 *
 * @export
 * @interface ViewOrders
 */
export interface ViewOrders {
    /**
     * Id
     * @type {string}
     * @memberof ViewOrders
     */
    id?: string;
    /**
     * User Id
     * @type {string}
     * @memberof ViewOrders
     */
    userId?: string;
    /**
     * Order Date
     * @type {string}
     * @memberof ViewOrders
     */
    orderDate?: string;
    /**
     * Total
     * @type {string}
     * @memberof ViewOrders
     */
    total?: string;
}

/**
 * Check if a given object implements the ViewOrders interface.
 */
export function instanceOfViewOrders(value: object): value is ViewOrders {
    return true;
}

export function ViewOrdersFromJSON(json: any): ViewOrders {
    return ViewOrdersFromJSONTyped(json, false);
}

export function ViewOrdersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ViewOrders {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'] == null ? undefined : json['id'],
        'userId': json['user_id'] == null ? undefined : json['user_id'],
        'orderDate': json['order_date'] == null ? undefined : json['order_date'],
        'total': json['total'] == null ? undefined : json['total'],
    };
}

export function ViewOrdersToJSON(json: any): ViewOrders {
    return ViewOrdersToJSONTyped(json, false);
}

export function ViewOrdersToJSONTyped(value?: ViewOrders | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'user_id': value['userId'],
        'order_date': value['orderDate'],
        'total': value['total'],
    };
}
