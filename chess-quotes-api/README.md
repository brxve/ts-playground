## chest-quotes-api

------------------------------------------------------------------------------------------

#### Getting all quotes

<details>
 <summary><code>GET</code> <code><b>/quotes</b></code> <code>(lists all quotes)</code></summary>

##### Parameters

> None

##### Responses

> | http code     | content-type                      | response                         |
> |---------------|-----------------------------------|----------------------------------|
> | `200`         | `application/json`                | `{"quotes":[...]]}`              |

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:3000/quotes
> ```

</details>

------------------------------------------------------------------------------------------

#### Getting all quotes from specific author

<details>
 <summary><code>GET</code> <code><b>/quotes/{author}</b></code> <code>(gets all quotes from specific author)</code></summary>

##### Parameters

> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `author` |  optional | string   | The specific author        |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | `{"quotes":[...]]}`              |

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:8889/quotes/MagnusCarlsen
> ```

</details>

------------------------------------------------------------------------------------------

#### Getting random quote

<details>
  <summary><code>GET</code> <code><b>/randomquote</b></code> <code>(gets random quote)</code></summary>

##### Parameters

> None

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`                | `{"randomquote":{...}}`              |

##### Example cURL

> ```javascript
>  curl -X DELETE -H "Content-Type: application/json" http://localhost:3000/randomquote
> ```

</details>

------------------------------------------------------------------------------------------