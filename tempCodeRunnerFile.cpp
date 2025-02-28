#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;
    stack<char> st;

    for (int i = 0; i < s.length(); i++) {
        if (s[i] == '(') {
            st.push(s[i]);
        } else if (s[i] == ')') {
            if (!st.empty()) {
                st.pop();
            } else {
                cout << "Unbalanced brackets\n";
                return 0;
            }
        }
    }

    if (st.empty()) {
        cout << "Balanced brackets\n";
    } else {
        cout << "Unbalanced brackets\n";
    }

    return 0;
}
