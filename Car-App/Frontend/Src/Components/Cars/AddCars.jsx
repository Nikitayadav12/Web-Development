const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting car:", formData);
  
    try {
      const res = await fetch("http://localhost:5000/api/cars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await res.json(); 
  
      if (res.ok) {
        alert("🚗 Car added successfully!");
        setFormData({
          name: "",
          price: "",
          quality: "",
          speed: "",
          yearReleased: "",
        });
      } else {
        console.error("❌ Server responded with:", result);
        alert("Failed to add car 😢: " + result.message); 
      }
    } catch (error) {
      console.error("❌ Error adding car:", error);
      alert("❌ Network or server error");
    }
  };
  