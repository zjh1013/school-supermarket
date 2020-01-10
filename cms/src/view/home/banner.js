import React, { Component } from "react";
import {
  Table,
  Modal,
  Button,
  Switch,
  message,
  Upload,
  Icon,
  Input,
  Divider
} from "antd";
import { getbanner, updatebanner } from "../../api/index";
const { Column } = Table;
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

class Banner extends Component {
  state = { visible: false, bannerData: [], loading: false };
  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({
      visible: false
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? "loading" : "plus"} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    //解构state内部数据
    let { bannerData, imageUrl } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          ＋增加
        </Button>
        <Modal
          okText="确认"
          cancelText="取消"
          title="添加图片"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={this.handleChange}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
            ) : (
              uploadButton
            )}
          </Upload>
          <Input placeholder="描述图片标题" />
        </Modal>
        <Table dataSource={bannerData}>
          <Column align="center" title="ID" dataIndex="id" key="id" />
          <Column
            align="center"
            width="480px"
            title="图片"
            render={bannerData => (
              <div className="imgs">
                <img src={bannerData.imgUrl} alt="" />
              </div>
            )}
            key="imgUrl"
          />
          <Column
            width="400px"
            align="center"
            title="标题"
            dataIndex="imgTxt"
            key="imgTxt"
          />
          <Column
            align="center"
            width="300px"
            title="是否显示"
            render={text => (
              <Switch
                defaultChecked={!!text.type}
                checkedChildren="开启"
                unCheckedChildren="禁用"
                onChange={this.clicks.bind(this, text.id)}
              />
            )}
            key="type"
          />
          <Column
            align="center"
            width="380px"
            title="操作"
            render={(text, record) => (
              <span>
                <Button type="primary">编辑</Button>
                <Divider type="vertical" />
                <Button type="danger">删除</Button>
              </span>
            )}
          />
        </Table>
      </div>
    );
  }
  //开启 禁用的功能
  clicks(id, checked) {
    console.log(checked);
    console.log(id);
    updatebanner({ flag: checked, id: id }).then(res => {
      if (res.data.code === 0) {
        message.success("修改成功", 0.5);
      }
    });
  }

  componentDidMount() {
    getbanner().then(res => {
      this.setState({
        bannerData: res.data.result
      });
    });
  }
}

export default Banner;
