import Image from 'next/image';
export default function Team() {
  return (
    <section className="w-full py-12 md:py-12 lg:py-24 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {[
            { name: "Alice Johnson", role: "CEO" },
            { name: "Bob Smith", role: "CTO" },
            { name: "Carol Williams", role: "Head of Design" },
            { name: "David Brown", role: "Customer Support Lead" },
          ].map((member) => (
            <div
              key={member.name}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="mb-4">
                <Image
                  alt={`${member.name}'s profile picture`}
                  className="object-cover w-40 h-40 mx-auto rounded-full shadow-md"
                  height={160}
                  src={`/placeholder.svg?height=200&width=200`}
                  width={160}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-500 mt-2">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
