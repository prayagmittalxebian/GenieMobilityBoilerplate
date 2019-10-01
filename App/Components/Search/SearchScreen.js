/* eslint-disable react-native/no-color-literals */
/* eslint-disable react/jsx-key */
import React, { PureComponent } from 'react'
import { View, TouchableOpacity, Image, SafeAreaView, TextInput, Text } from 'react-native'
import SearchScreenStyle from 'App/Components/Search/SearchScreenStyle'
import Colors from '../../Theme/Colors'
import _ from 'lodash'

const TypeArray = [
  { type: 'Cust ID', regex: /^\d{1,9}$/, active: false },
  { type: 'MDM ID', regex: /^\d{1,9}$/, active: false },
  { type: 'Mobile No.', regex: /^\d{10}$/, active: false },
  { type: 'PAN', regex: /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/, active: false },
  { type: 'Passport', regex: /^[a-zA-Z][0-9]{7}$/, active: false },
  { type: 'Cust Name', regex: /^[a-zA-Z ]{1,30}$/, active: false },
  {
    type: 'Account No.',
    regex: /(^[A-Za-z0-9]{7}\d{9}$)|(^[0-9]{15}$)|(^[a-zA-Z]{3}[0-9]{12}$)/,
    active: false,
  },
  { type: 'CKYC No.', regex: /^\d{14}$/, active: false },
  { type: 'UPI Handle', regex: /^[\w]+@[a-zA-Z]+$/, active: false },
  { type: 'Twitter Id', regex: /^@[A-Za-z0-9_]{1,15}$/, active: false },
  // { type: "Aadhar", regex: /^\d{12}$/, active: false },
  {
    type: 'Email',
    regex: /^[\w-.]+@([\w-]+\.)+[a-zA-z]{2,3}([.]*[a-z]{2})*$/,
    active: false,
  },
]

class SearchScreen extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      infoPressed: false,
    }
  }

  onSearchTextChanged(text) {
    console.log(text)
    this.setState({ searchText: text })

    TypeArray.map((item) => {
      console.log('item', item)

      if (item.regex) {
        if (item.regex.test(text)) {
          item.active = true
        } else {
          item.active = false
        }
      }
    })
  }

  renderInfoBox() {
    if (this.state.infoPressed) {
      return (
        <View style={{ backgroundColor: '#F6F6F6', marginTop: 30, marginBottom: 10 }}>
          <View
            style={{
              width: 0,
              height: 0,
              position: 'absolute',
              end: 20,
              backgroundColor: 'transparent',
              marginTop: -10,
              borderTopWidth: 0,
              borderRightWidth: 10,
              borderBottomWidth: 10,
              borderLeftWidth: 10,
              borderTopColor: 'transparent',
              borderRightColor: 'transparent',
              borderBottomColor: Colors.searchLineColor,
              borderLeftColor: 'transparent',
            }}
          ></View>
          <View
            style={{
              backgroundColor: Colors.searchLineColor,
              height: 2,
              width: null,
            }}
          ></View>

          <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 10, color: '#005FA9' }}>
            Search Criteria Examples
          </Text>
          <View
            style={{
              backgroundColor: Colors.searchLineColor,
              height: 2,
              width: null,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
            }}
          ></View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <View>
              <Text style={{ marginTop: 10 }}>Name + DOB</Text>
              <Text style={{ marginTop: 10 }}>Name + Branch Code</Text>
              <Text style={{ marginTop: 10 }}>Name + City</Text>
            </View>
            <View>
              <Text style={{ marginTop: 10 }}>:Rajesh Sharma + 28/03/1978</Text>
              <Text style={{ marginTop: 10 }}>:Rajesh Sharma + 401</Text>
              <Text style={{ marginTop: 10 }}>:Rajesh Sharma + Delhi</Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: Colors.searchLineColor,
              height: 2,
              width: null,
              marginTop: 10,
            }}
          ></View>
        </View>
      )
    }
  }

  render() {
    return (
      <SafeAreaView style={SearchScreenStyle.container}>
        <View style={SearchScreenStyle.viewContainer}>
          {/* This is for cross button */}
          <TouchableOpacity style={SearchScreenStyle.crossButton}>
            <Image
              source={require('App/Assets/Images/Close.png')}
              style={SearchScreenStyle.crossImage}
            />
          </TouchableOpacity>
          {/* This is for Search Input  */}
          <View style={SearchScreenStyle.searchInputView}>
            <TextInput
              style={SearchScreenStyle.searchInput}
              placeholder="Search..."
              selectionColor={'black'}
              returnKeyLabel={'Search'}
              onChangeText={this.onSearchTextChanged.bind(this)}
            />
          </View>
          {/* This is for Divider line */}
          <View style={SearchScreenStyle.searchdividerView}>
            <View style={SearchScreenStyle.dividerLine}></View>
            <View style={SearchScreenStyle.dividerTextView}>
              <Text style={SearchScreenStyle.dividerText}>You can search by</Text>
            </View>
            <View style={SearchScreenStyle.dividerLine}></View>
          </View>
          {/* This is for Option of search categories  */}
          <View style={SearchScreenStyle.optionCategoryView}>
            <View style={SearchScreenStyle.optionView}>
              {TypeArray.map((item, index) => {
                return (
                  <View
                    style={[
                      SearchScreenStyle.optionIcon,
                      {
                        backgroundColor:
                          item.active === false
                            ? Colors.optionInactiveBackground
                            : Colors.optionActiveBackground,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        SearchScreenStyle.optionText,
                        {
                          color:
                            item.active === false
                              ? Colors.optionInactiveText
                              : Colors.optionActiveText,
                        },
                      ]}
                    >
                      {item.type}
                    </Text>
                  </View>
                )
              })}
            </View>
            <TouchableOpacity
              style={SearchScreenStyle.infoView}
              onPress={() => {
                this.setState({ infoPressed: !this.state.infoPressed })
              }}
            >
              <Image
                source={require('App/Assets/Images/Info.png')}
                style={SearchScreenStyle.infoIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* This is for Info Box */}
        {this.renderInfoBox()}
      </SafeAreaView>
    )
  }
}

export default SearchScreen
