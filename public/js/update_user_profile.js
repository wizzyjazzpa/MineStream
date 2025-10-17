function updateUserInfo() {
    return {
      userid: '',
      phoneNumber: '',
      country: '',
      state: '',
      date: '',
      month: '',
      year: '',
      address: '',
      message: '',
      isSubmitting: false,

      async submitForm() {
        this.isSubmitting = true;
        this.message = '';

        const dob = `${this.date}/${this.month}/${this.year}`;
        const payload = {
          Userid: this.userid,
          phoneNumber: this.phoneNumber,
          Country: this.country,
          State: this.state,
          DOB: dob,
          Address: this.address
        };
         alert(this.userid);
        try {
          const response = await fetch("/api/update_user_info", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
          });

          const data = await response.json();

          if (data.status === 200) {
            this.message = "<p class='alert alert-success'>Profile has been Updated</p>";
          } else {
            this.message = "<p class='alert alert-danger'>An Error Just Occured</p>";
          }
        } catch (error) {
          console.error("Error:", error);
          this.message = "<p class='alert alert-danger' style='text-align:center'>Code based Error</p>";
        } finally {
          this.isSubmitting = false;
        }
      }
    };
  }