//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ApiLogin.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class UserDetail
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public UserDetail()
        {
            this.BookingPages = new HashSet<BookingPage>();
        }
    
        public int Id { get; set; }
        public string FullName { get; set; }
        public string EmailId { get; set; }
        public Nullable<long> ContactNo { get; set; }
        public string Gender { get; set; }
        public string City { get; set; }
        public string Password { get; set; }
        public string Roles { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<BookingPage> BookingPages { get; set; }
    }
}
