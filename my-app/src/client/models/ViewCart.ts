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
 * @interface ViewCart
 */
export interface ViewCart {
    /**
     * Id
     * @type {string}
     * @memberof ViewCart
     */
    id?: string;
    /**
     * User Id
     * @type {string}
     * @memberof ViewCart
     */
    userId?: string;
    /**
     * Variant Id
     * @type {string}
     * @memberof ViewCart
     */
    variantId?: string;
    /**
     * Quantity
     * @type {string}
     * @memberof ViewCart
     */
    quantity?: string;
}

/**
 * Check if a given object implements the ViewCart interface.
 */
export function instanceOfViewCart(value: object): value is ViewCart {
    return true;
}

export function ViewCartFromJSON(json: any): ViewCart {
    return ViewCartFromJSONTyped(json, false);
}

export function ViewCartFromJSONTyped(json: any, ignoreDiscriminator: boolean): ViewCart {
    if (json == null) {
        return json;
    }
    return {

        'id': json['id'] == null ? undefined : json['id'],
        'userId': json['user_id'] == null ? undefined : json['user_id'],
        'variantId': json['variant_id'] == null ? undefined : json['variant_id'],
        'quantity': json['quantity'] == null ? undefined : json['quantity'],
    };
}

export function ViewCartToJSON(json: any): ViewCart {
    return ViewCartToJSONTyped(json, false);
}

export function ViewCartToJSONTyped(value?: ViewCart | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {

        'id': value['id'],
        'user_id': value['userId'],
        'variant_id': value['variantId'],
        'quantity': value['quantity'],
    };
}
