import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import gql from 'graphql-tag';
import Table from 'antd/lib/table';
import Button from 'antd/lib/button';

const columns = [
	{
	  title: '_id',
	  dataIndex: '_id',
	  key: '_id',
	  render: _id => <Link to={`/admin/users/${_id}`}>{_id}</Link>,
	},
	{
	  title: 'email',
	  dataIndex: 'emails.0.address',
	  key: 'emails.0.address'
	},
	{
	  title: 'role',
	  dataIndex: 'roles',
	  key: 'roles'
	},
];


class AdminUsersTable extends React.Component {
	render(){
		return (
			<Table
				rowKey={record => record._id} 
				columns={columns} 
				dataSource={this.props.users}  
			/>
		);
	}
}

class AdminAddShopPage extends React.Component {
	render(){
		//const { loading, users } = this.props.data;

		//if (loading) { return <div>Loading...</div>; }

		return (
			<div>
				AdminAddShopPage
				{/*<AdminUsersTable users={users} />*/}
			</div>
		);
	}
}

/*const GET_SHOPS = gql`
  query getShops {
    shops {
      _id
    }
  }
`;*/


export default AdminAddShopPage //graphql(GET_SHOPS)(AdminUsersPage);