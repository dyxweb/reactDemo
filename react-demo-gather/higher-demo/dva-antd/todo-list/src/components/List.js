/**
 * Created by chengfan on 2017/5/23.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';
import { Link,routerRedux} from 'dva/router';

const List = ({ onDelete, lists,dispatch }) => {
	function more(id){
		dispatch(routerRedux.push(`/list/${id}`))
	}
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
    {
      title: 'more',
      render: (text, record) => {
        return (
           <a href="javascript:;" onClick={()=>more(record.id)}>更多</a>
        );
      },
    },
  ];
  return (
    <Table
      dataSource={lists}
      columns={columns}
      pagination={{ pageSize: 6 }}
    />
  );
};

List.propTypes = {
  onDelete: PropTypes.func.isRequired,
  lists: PropTypes.array.isRequired,
};

export default List;
