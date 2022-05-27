export default function TransactionHistory({items }) {
    return (<table class="transaction-history"><thead>Type 
Amount Currency
  {items.map(item=>
    <tr key={item.id}>
          <th> {item.type}</th>
          <th>{item.amount}</th>
          <th>{item.currency}</th>
    </tr>
  )}

</thead>
</table>)
}